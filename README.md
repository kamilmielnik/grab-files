# grab-files

## Installation
`npm install -g grab-files`

## Usage

### Syntax
`grab-files --input=[string] --output=[string] --timeout=[number] --preserve=[boolean]`

### Parameters
| Name       | Alias | Default Value | Required | Example             | Description                                                           |
|------------|-------|---------------|----------|---------------------|-----------------------------------------------------------------------|
| `input`    | `i`   | `urls.txt`    | no       | `--input=urls.txt`  | input file with new-line separated urls                               |
| `output`   | `o`   | `download`    | no       | `--output=download` | output directory                                                      |
| `timeout`  | `t`   | `200`         | no       | `--timeout=200`     | time between subsequent requests in milliseconds                      |
| `preserve` | `p`   | `true`        | no       | `--preserve=true`   | preserve original file names; set to `false` to use a number sequence |

### Print version
`grab-files -v`
