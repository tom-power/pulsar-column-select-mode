# Column selection mode for Pulsar

Simple package adding keybindings only column selection mode for [Pulsar](https://pulsar-edit.dev/), similar to [IntelliJ](https://www.jetbrains.com/help/idea/multicursor.html#column_selection) etc.

Motivation being I prefer this workflow to using `add-selection-above` and `add-selection-below`.

# Commands

| Command                               | Description                                 |
| ------------------------------------- | ------------------------------------------- |
| pulsar-column-select-mode:toggle      | toggle column selection mode                |
| pulsar-column-select-mode:select-up   | normal/column select up depending on mode   |
| pulsar-column-select-mode:select-down | normal/column select down depending on mode |

# Keybindings

| Key        | Command                               |
| ---------- | ------------------------------------- |
| shift-up   | pulsar-column-select-mode:select-up   |
| shift-down | pulsar-column-select-mode:select-down |

Please disable these in the settings if you prefer to use the commands directly.
