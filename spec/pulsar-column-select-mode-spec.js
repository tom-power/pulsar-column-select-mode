const PulsarColumnSelectMode = require('../lib/pulsar-column-select-mode');

const PAGE_SIZE = 50;

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe("PulsarColumnSelectMode", function() {
  const activationPromise = null;
  let editor = null;
  let editorView = null;

  const loadBefore = filename => beforeEach(function() {
    waitsForPromise(() => atom.workspace.open(filename));
    waitsForPromise(() => atom.packages.activatePackage('pulsar-column-select-mode'));
    return runs(function() {
      editor = atom.workspace.getActiveTextEditor();
      editorView = atom.views.getView(editor);
      expect(editorView).not.toBeUndefined();
      expect(atom.packages.isPackageActive('pulsar-column-select-mode')).toBe(true);
    });
  });

  describe("pulsar column select mode", function() {

    loadBefore('test.txt');

    describe("mode off select up", function() {
      return it("should select up without column select", function() {
        editor.setCursorBufferPosition([2, 0]);
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:off");
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:select-up");
        expect(editor.getSelectedText()).toBe("in a \n")
        expect(editor.getCursors().length).toBe(1)
        expect(editor.getCursorBufferPosition()).toEqual({ row : 1, column : 0 });
      });
    });

    describe("mode on select up", function() {
      return it("should select up with column select", function() {
        editor.setCursorBufferPosition([2, 0]);
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:on");
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:select-up");
        expect(editor.getSelectedText()).toBe("")
        expect(editor.getCursors().length).toBe(2)
        expect(editor.getCursorBufferPosition()).toEqual({ row : 1, column : 0 });
      });
    });

    describe("mode off select down", function() {
      return it("should select down without column select", function() {
        editor.setCursorBufferPosition([0, 0]);
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:off");
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:select-down");
        expect(editor.getSelectedText()).toBe("some text\n")
        expect(editor.getCursors().length).toBe(1)
        expect(editor.getCursorBufferPosition()).toEqual({ row : 1, column : 0 });
      });
    });

    describe("mode on select down", function() {
      return it("should select down with column select", function() {
        editor.setCursorBufferPosition([0, 0]);
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:on");
        atom.commands.dispatch(editorView, "pulsar-column-select-mode:select-down");
        expect(editor.getSelectedText()).toBe("")
        expect(editor.getCursors().length).toBe(2)
        expect(editor.getCursorBufferPosition()).toEqual({ row : 1, column : 0 });
      });
    });
  });
});
