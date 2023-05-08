# Column selection mode for Pulsar

Simple package that provides a column selection mode for [Pulsar](https://pulsar-edit.dev/), similar to [IntelliJ](https://www.jetbrains.com/help/idea/multicursor.html#column_selection) etc. [^1]

Motivation being I prefer this workflow to using `add-selection-above` and `add-selection-below`.

![demo](https://github.com/tom-power/pulsar-column-select-mode/blob/main/assets/demo.gif)

# Commands

| Command                               | Description                                     |
| ------------------------------------- | ----------------------------------------------- |
| pulsar-column-select-mode:on          | turn column selection mode on                   |
| pulsar-column-select-mode:off         | turn column selection mode off                  |
| pulsar-column-select-mode:select-up   | select up: normal or column depending on mode   |
| pulsar-column-select-mode:select-down | select down: normal or column depending on mode |

# Keybindings[^2]

| Key        | Command                                    |
| ---------- | ------------------------------------------ |
| shift-up   | pulsar-column-select-mode:select-up        |
| shift-down | pulsar-column-select-mode:select-down [^3] |


[^1]: keybindings only at the moment.
[^2]: these override keybindings for `core:select-up` and `core:select-down` in the editor and are more or less needed for the package to work.
[^3]: I like footnotes
