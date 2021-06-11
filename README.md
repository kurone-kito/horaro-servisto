# 🐶 Horaro servisto

## Overview

It's a driver app that controls my servant of the calendar.

## System requirements

- Node.js >= v14
- GUI Environment that can run the Electron

## Usage

### 1: Install the project's dependencies

```sh
npm ci
```

### 2: Edit the JSON source

If necessary, edit the source JSON file. It file exists in path
`/cypress/fixtures/WeeklySchedule.json`.

### 3: Launch the app

```sh
npm run fetch
```

The app steers the weekly schedule web app and **places the downloaded image
in path `/cypress/downloads/schedule.png`**. Also, put a video showing the
work process on path `/cypress/videos/servisto.spec.ts.mp4`.

### extra: Run with interactively

```sh
npm start
```

## License

MIT

## See also

<https://boda-kosuzu.github.io/weekly-schedule/>
