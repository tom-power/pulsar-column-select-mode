module.exports = {
  isActive: false,

  activate() {
    atom.commands.add('atom-text-editor', {
      'pulsar-column-select-mode:on': () => this.on(),
      'pulsar-column-select-mode:off': () => this.off(),
      'pulsar-column-select-mode:select-up': () => this.selectUp(),
      'pulsar-column-select-mode:select-down': () => this.selectDown(),
    });
  },

  on() {
    this.isActive = true
  },

  off() {
    this.isActive = false
  },

  selectUp() {
    if (this.isActive)
      this.dispatch('editor:add-selection-above')
    else
      this.dispatch('core:select-up')
  },

  selectDown() {
    if (this.isActive)
      this.dispatch('editor:add-selection-below')
    else
      this.dispatch('core:select-down')
  },

  dispatch(command) {
    const editor = atom.workspace.getActiveTextEditor()
    const view = atom.views.getView(editor)
    return atom.commands.dispatch(view, command)
  }

};
