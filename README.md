# Overview

This repo runs with:

* rails 7
* jsbundling-rails in its default esbuild configuration
* cssbundling-rails

## Usage

1. `bundle install`
2. `./bin/dev` (loads rails & esbuild)

# Experiments


## Delegated

The following are delegated to the other repo, but are relevant here too:

* [http2-server-push](https://github.com/tgaff/the_one_with_import_maps#http2-server-push)
* [running with early-hints](https://github.com/tgaff/the_one_with_import_maps#http2-server-push)


## Image loaded via JS

This is to demonstrate the technique needed to gain access to an image in the JS side.  This varies in different Rails versions and depending on which JS / asset tools are in use.

In this case we can directly import the image URL in the JS stimulus controller.  The data attribute technique used in the import-maps repo could also work if the image was placed in sprockets instead.

## Stimulus backing popper.js for bootstrap tooltips

This is mainly just demonstrating that Popper & Hotwire are setup and correctly configured.  Configuration varies a little based on the JS stack included.
