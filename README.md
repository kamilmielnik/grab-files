# grab-files

![License](https://img.shields.io/npm/l/grab-files)
![Node version](https://img.shields.io/node/v/grab-files)
![Dependencies](https://img.shields.io/david/kamilmielnik/grab-files)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/kamilmielnik/grab-files)
![Prettier](https://github.com/kamilmielnik/grab-files/workflows/Prettier/badge.svg)

## Description
If you have a text file with a list of URLs pointing to files, this tool will download them for you.

## Installation
`npm install -g grab-files`

## Usage

### Syntax
`grab-files --input=[string] --output=[string] --timeout=[number] --preserve=[boolean]`

### Example
`grab-files -i urls.txt -o download_dir`

### Parameters
| Name       | Alias | Default Value | Required | Example       | Description                                                           |
|------------|-------|---------------|----------|---------------|-----------------------------------------------------------------------|
| `input`    | `i`   | `urls.txt`    | no       | `-i urls.txt` | input file with new-line separated urls                               |
| `output`   | `o`   | `download`    | no       | `-o download` | output directory                                                      |
| `timeout`  | `t`   | `200`         | no       | `-t 200`      | time between subsequent requests in milliseconds                      |
| `preserve` | `p`   | `true`        | no       | `-p true`     | preserve original file names; set to `false` to use a number sequence |

### Print version
`grab-files -v`
