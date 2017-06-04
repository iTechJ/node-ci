## The complete build lifecycle

1. **install**: install any dependencies required.
2. **script**: run the build script.
3. **deploy (optional)**: deploy application (deployment steps can’t be overridden, but is defined by using one of supported continuous deployment providers, e.g. Heroku).

You can perform additional steps when your build succeeds or fails using the `after_success` (such as building documentation, or deploying to a custom server) or `after_failure` (such as uploading log files) options.

#### Main steps order:
1. `before_install` (install required build tools using `sudo apt-get`, `npm install -g`, etc)
2. `install` (default command for node_js: `npm install`)
3. `before_script`
4. `script` (default command for node_js: `npm test`)
5. `after_success` and `after_failure`
6. `before_deploy`
7. `deploy`
8. `after_deploy`
9. `after_script`

**Other available steps**:
* install `apt addons`
* install `cache components`
* `before_cache`

See [here](https://docs.travis-ci.com/user/customizing-the-build/#The-Build-Lifecycle) for more info.


## Building Specific Branches

#### Using black list
```
branches:
    except:
        - legacy
        - experimental
```

#### Using white list
```
branches:
    only:
        - master
        - /^feature-.*$/
```
Will also build pull requests to these branches.

## Environment Variables

#### Variables types:
1. Defining public variables in .travis.yml
```
env:
    - DB=mysql
    - TIMEOUT=2000
```

2. Defining Variables in Repository Settings (go to travis-ci.org, navigate to the repository, choose “Settings” from the menu, and click on “Add new variable”).

3. Default Environment Variables (`CI=true`, `TRAVIS_BRANCH`, [etc](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables))

4. Convenience Variables (`TRAVIS_SECURE_ENV_VARS`, `TRAVIS_PULL_REQUEST`)