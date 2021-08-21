# Contributing to discogoose

Contributions to `discogoose` are much appreciated and welcome.
As a contributor, please, follow guidelines and rules described in this document.

# Workflow

## Creating issues

Use Github issues to create tasks, feature requests and bug reports. Each issue should be linked to `discogoose` project and have proper labels. If there's no assignee fro some issue it is open for development and anyone can work on it.

## Submitting Pull Request

While working on a feature try to share your progress as early as possible. This will allow other developers give some feedback and prevent you from redoing some work later.

Pull Request description should give solid understanding of new feature and how it was implemented. Feel free to leave todo list in PR description listing remaining work and progress.

### Linking Pull Request with Issue

Link issue that will be fixed by your PR (for example, `fixed #123`). Once this is done merging PR will automatically close linked issue. See [Official Github Documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) for more details.

## Reviewing Pull Request

As a reviewer you are responsible for the feature as much as a contributor. Reviewers should provide valuable descriptive feedback with possibly some examples. Be kind and friendly to your teammates and always patient.

# Coding rules

## Commit message

Generally we should follow a simplified [Angular's commit message guidelines](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#).
Following commit message structure should be used:
```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Allowed \<type> can be one of following:
* feat (feature)
* fix (bug fix)
* docs (documentation)
* style (formatting, missing semi colons, …)
* refactor
* test (when adding missing tests)
* chore (maintain)

## Branching strategy

Once you start developing new feature create your dev branch from `main`. Use following rules when naming your branch:
```
<dev-initials>/<type>/<branch-desc>
```
where
* \<dev-initials> - initials of branch author/developer
* \<type> - describes the kind of change that will be done in this branch (same as commit message type)
* \<branch-desc> - short descriptive branch name

For example, developer John Doe adding new feature can create following branch:
```
git checkout -b jd/feat/adds-user-counts 
```

