# Frontend Version Control Task - Quiz App

This project demonstrates Git version control using a simple quiz application built with HTML, CSS, and JavaScript.

### Repository Purpose

This repository demonstrates:

Initializing and managing a Git repository
Using feature branches for isolated development
Making meaningful commits with proper messages
Creating and reviewing pull requests
Merging changes effectively
Reverting mistakes and cleaning up branches

Steps:
Navigate to your project folder in VS Code
cd path/to/quiz-app

Initialize a Git repository locally
`git init`

Stage and commit your initial files
`git add README.md`
`git commit -m "README"`

Connect to GitHub and push
Create a new public repository on GitHub called Frontend-version-control-task-[yourname]
Link your local repo to GitHub:
`git branch -M main`
`git remote add origin <your-repo-url>`
`git push -u origin main`

At this point, your local files are version-controlled and synced with GitHub.

## Creating a feature-layout branch and switching to the branch
`git checkout -b feature-layout`

## Commiting files in the feature-layout branch
`git add index.html`
`git commit -m "html file"`
Note: whatever you write in the quotes after -m when using git commit is your description

## Pushing files to feature-layout branch
`git push origin feature-layout`

## Changing branch back to main
`git checkout main`

## Pull Requests & Merging
PR 1: feature-layout-→ main
Added layout improvements, centered quiz container and buttons.

PR 2: feature-styling → main
Updated UI styling: colors, hover effects, and spacing.

PR 3: feature-quiz-logic
Added the functionality of the app

Review Process:
Comments were added to simulate a review process. After addressing feedback, PRs were merged using GitHub.

## Screenshot of merged branches
![screenshot of merged branches](image.png)


## Branch Renaming & Sync Workflow

### First Method was done on Feature-Styling branch
#### Rename local branch
git branch -m feature-styling feature-ui-styling

#### Push new branch to GitHub
git push origin feature-ui-styling

#### Delete old branch on GitHub
git push origin --delete feature-styling

#### Set upstream for tracking
git push --set-upstream origin feature-ui-styling


### Second Method  was done on Feature-Layout branch
#### Renamed the branch on github

#### Rename local branch
git branch -m feature-layout feature-layout-updated

#### Fetch updates from remote
git fetch origin

#### Set upstream to new remote branch
git branch -u origin/feature-layout-updated feature-layout-updated

#### Update local HEAD to point to default branch
git remote set-head origin -a



## Intentional Mistake & Revert
Mistake: Removed p from the heading.
Correction using Git:
# Revert the last commit
`git revert HEAD`
Commit restored the previous working state.

## Most Frequently Used Git Commands
git init – Initialize repository
git branch – List or create branches
git checkout -b <branch> – Create and switch to a branch
git add . – Stage changes
git commit -m "message" – Commit changes
git push – Push changes to remote
git pull – Fetch and merge changes
git fetch --all / git fetch origin – Update local repo with remote changes
git branch -m old new – Rename local branch
git branch -u origin/<branch> – Set upstream tracking
git revert HEAD – Revert last commit
git remote prune origin – Clean up deleted branches


