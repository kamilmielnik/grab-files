# grab-files

## Description
If you have a text file with a list of URLs pointing to files, this tool will download them for you.

## Installation
`npm install -g grab-files`

## Usage

### Syntax
`grab-files --input=[string] --output=[string] --timeout=[number] --preserve=[boolean]`

### Parameters
| Name       | Alias | Default Value | Required | Example             | Description                                                           |
|------------|-------|---------------|----------|---------------------|-----------------------------------------------------------------------|
| `input`    | `i`   | `urls.txt`    | no       | `-i urls.txt`       | input file with new-line separated urls                               |
| `output`   | `o`   | `download`    | no       | `-o download`       | output directory                                                      |
| `timeout`  | `t`   | `200`         | no       | `-t 200`            | time between subsequent requests in milliseconds                      |
| `preserve` | `p`   | `true`        | no       | `-p true`           | preserve original file names; set to `false` to use a number sequence |

### Print version
`grab-files -v`
