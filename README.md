# Column selection mode for Pulsar

Simple package adding column selection mode for [Pulsar](https://pulsar-edit.dev/), similar to [IntelliJ](https://www.jetbrains.com/help/idea/multicursor.html#column_selection) etc, keybindings only at the moment.

Motivation being I prefer this workflow to using `add-selection-above` and `add-selection-below`.

# Commands

| Command                               | Description                                     |
| ------------------------------------- | ----------------------------------------------- |
| pulsar-column-select-mode:toggle      | toggle column selection mode                    |
| pulsar-column-select-mode:select-up   | select up: normal or column depending on mode   |
| pulsar-column-select-mode:select-down | select down: normal or column depending on mode |

# Keybindings

| Key        | Command                               |
| ---------- | ------------------------------------- |
| shift-up   | pulsar-column-select-mode:select-up   |
| shift-down | pulsar-column-select-mode:select-down |

Note: overrides normal keybindings for `core:select-up` and `core:select-down` in the editor.
