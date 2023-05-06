'use babel';

import { CompositeDisposable } from 'atom';

export default {
  isActive: false,
  disposables: null,

  activate() {
    this.disposables = new CompositeDisposable();

    this.disposables.add(atom.commands.add('atom-workspace', {
      'pulsar-column-select-mode:toggle': () => this.toggle(),
      'pulsar-column-select-mode:select-up': () => this.selectUp(),
      'pulsar-column-select-mode:select-down': () => this.selectDown(),
    }));
  },

  deactivate() {
    this.disposables.dispose();
  },

  toggle() {
    this.isActive = !this.isActive
  },

  selectUp() {
    if (this.isActive)
      dispatch('editor:add-selection-above')
    else
      dispatch('core:select-up')
  },

  selectDown() {
    if (this.isActive)
      dispatch('editor:add-selection-below')
    else
      dispatch('core:select-down')
  },

};

const dispatch = async (command) => {
  const editor = atom.workspace.getActiveTextEditor()
  const view = atom.views.getView(editor)
  return atom.commands.dispatch(view, command)
}
