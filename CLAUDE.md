# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Python package named `claude-code-crash-course` that provides a simple command-line tool to play a sound file (`ulala.wav`) using `ffplay`. The package structure is minimal:

- `src/claude_code_crash_course/__init__.py`: Contains the main entry point that prints a greeting.
- `src/claude_code_crash_course/play_sound.py`: Contains the logic to play the sound file.
- `ulala.wav`: The audio file to be played, located at the repository root.

The project is built and managed using `uv` (as indicated by the `uv.lock` and `.venv` directory).

## Development Setup

1. **Clone the repository** (if not already done).

2. **Install dependencies** using `uv`:
   ```bash
   uv sync
   ```

   This will create a virtual environment (`.venv`) and install the package in editable mode.

3. **Activate the virtual environment** (if needed for interactive work):
   ```bash
   source .venv/bin/activate
   ```

## Common Commands

### Running the Application

After installation, you can run the command-line tool directly:

```bash
claude-code-crash-course
```

Alternatively, you can run the module with Python:

```bash
python -m claude_code_crash_course
```

### Playing the Sound

The main functionality is to play the sound. The command above will trigger the sound playback via `ffplay`. Ensure `ffmpeg` (which provides `ffplay`) is installed on your system.

### Running Tests

There are currently no tests in the repository. If you add tests (e.g., using `pytest`), you can run them with:

```bash
uv run pytest
```

Or, if you prefer to run tests within the virtual environment:

```bash
pytest
```

### Linting and Formatting

The project does not currently have linting or formatting tools configured. You can add tools like `ruff`, `flake8`, or `black` to `pyproject.toml` under `[project.optional-dependencies]` or as dev dependencies, and then run them accordingly.

For example, to add `ruff` as a dev dependency and run it:

```bash
uv add --dev ruff
uv run ruff check .
```

### Dependency Management

- To add a new dependency:
  ```bash
  uv add <package_name>
  ```

- To add a development dependency:
  ```bash
  uv add --dev <package_name>
  ```

- To update dependencies:
  ```bash
  uv lock
  ```

- To synchronize the environment with the lock file:
  ```bash
  uv sync
  ```

## Architecture Notes

- The package follows a standard `src-layout` with the Python package under `src/`.
- The main entry point is defined in `pyproject.toml` under `[project.scripts]`.
- Sound playback is handled by the `play_sound.py` module, which constructs an absolute path to the `ulala.wav` file relative to the script location and invokes `ffplay` with appropriate flags to hide the window and exit automatically.
- The `.claude/settings.json` file contains a hook that plays the sound whenever Claude Code stops (via a `Stop` hook). This is a customization specific to this repository.

## Notes for Claude Code

- When working in this repository, you may notice that stopping Claude Code triggers a sound (due to the hook). This is intentional and can be ignored or modified by editing `.claude/settings.json`.
- The primary purpose of this repository appears to be a crash course or demonstration for Claude Code, hence the minimal structure.

## Further Exploration

- To understand how the package is installed and executed, examine the `pyproject.toml` and the `__init__.py` and `play_sound.py` files.
- If you wish to extend the functionality (e.g., add more command-line options, different sounds, etc.), modify the source files under `src/claude_code_crash_course/`.