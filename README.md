# Caratula

Caratula (spanish for Cover) is a *startpage* or *homepage* for your web browser written with [VueJS](https://vuejs.org/), [Bulma](https://bulma.io/) and [Material Design Icons](https://pictogrammers.com/library/mdi/)

 ![Default page](/sample_screenshot.png)

> You can use `/` for giving focus to search box

> Pages columns are customizable via JSON file, you need to copy `custom_pages.sample.json` to `custom_pages.json` and write your own

Sample object for `custom_pages.json`

```json
[
    {
        "name": "Dev",
        "icon": "mdiCodeArray",
        "links": [
            {
                "name": "Github",
                "url": "https://github.com",
                "icon": "mdiGithub"
            }
        ]
    }
]
```

> `icon` should have the value for Vue Icon on Material Design Icons

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```


## TODO

- [ ] Add dark/light theming, based on day/night
- [ ] Add a Settings section either modal or another page
- [ ] Add a way to import/export user custom pages from settings
- [ ] Change Custom Pages section to have it in storage rather than JSON file
- [ ] Add some coloring option from settings, such as search engine icons color and search box focus color and store it
- [ ] Add a way to customize tiles section and add more than clock
- [ ] Add a way to export all settings
