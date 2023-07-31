# https://nvie.com/posts/
(https://nvie.com/posts/a-successful-git-branching-model/)

## {1}. Create branch `main`
- Not edit anything on the main branch.
- Not up code to the main branch.
- Create init all to `main` after push to `develop` branch.

## {2}. Create branch `develop`
- (1): Create feature code from `develop` branch ( checkout -b feature.xxx from `develop`).
- (2): Push merge code to `release` branch.

## {3}. Create branch `feature.xxx`
- (1): Working feature1 is done will push to `develop` branch. and `develop` branch will execute develop:(2)
- (2): `release` branch merge to `main` branch and have to delete `release` branch.

## {4}. If code on `main` branch error .
- (1): `main` branch will checkout -b new branch `hotfixes`
- (2): `hotfixes` branch will execute merge to `develop` branch .
- (3): Continues develop`{2}`
- (4): merge `main` ok after fix , will delete `hotfixes` branch , `release` branch.