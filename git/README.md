# Alura Git Courses

## Git and GitHub: Manage and share your code

[📃 Certificate](https://cursos.alura.com.br/certificate/bruno-andrade18/git-github-controle-de-versao)

## Git and GitHub: Branching, Conflicts, and Pull Requests Strategies

[📃 Certificate](https://cursos.alura.com.br/certificate/bruno-andrade18/git-github-branching-conflitos-pull-requests)

IDE for better understanding and simplyfying git scripts
[Git Visualizing](https://git-school.github.io/visualizing-git/)

# Notes

Commit-related

    git commit -m "message"
        Send your code changes with a simple message

    git commit
        Send your code, then:

        With Vim editor, write your main message at the top, then breakrow.
        The next paragraph you can write a better an detailed message, specially when you commit a lot of changes
        :wq to quit and save your file with Vim

    git commit --amend -m "message changed"
        Changes your current commit message

    git commit --amend --no-edit
        add simple cnahges, e.g. 1 or 2 lines, to your commit
        Note: changes must be staged to take effect, not pushed or commited yet

Merge

    git merge branchName
        Generate a new commit for merged branches

    Vim editor > :x
        Save and exit commit message, while merging branches - this is the last step

    git rebase branchName
        Generate a new commit - not a merge.
        This is commom when you want to merge a branch with another, but instead of creating a commit merge, you're creating an additional commit ahead in the branch you wanted rebase - in this case: branchName
        This also rewrites all git history log

    git cherry-pick commitHash
        Pick a commit (can be any) an pull into your current branch

Loggin

    git log --graph
        Shows the log with different development trees

    git log -p
        Shows the log and current changed scripts

    git log --decorate --oneline --graph --all
        Shows the log with graph and one line, simplified

    git diff commithashLeft..commithashRight
        Important! Include (..) to compare. Compare changes between commits (any commits), where left has must be older than right commit

    git diff
        Shows changes not commit and not added to the index (with git add .)

    git checkout
        Navigate between branches with git checkout branchName
        Or discard changes with git checkout -- file.example, instead of using git add before commit

    git show commitHash
        Shows a commit full log and changes
    
    git blame fileName
        Returns, commit hash, name and date time about how did the changes, for every single line

Revert

    git reset HEAD file.example
        Remove a file from changes to be commited list, where HEAD in this case, means where you're gonna save your file

    git revert git_hash_commit
        Undo you commit and your changes, than create another commit where you can write an optional message

Restore

(New in git! Comes from git checkout methods. Git checkout can switch branches OR restore workflow tree files)

    git restore --source commitHash . || commitHash fileName
        You can restore all files from determined commit or you can restore a single file

    git restore --staged fileName
        Remove current file changes staged in your work tree

Reflog

    git reflog
        Shows all scripts made in your .git current repo
        > Example
        If you deleted a branch feature/navbar, and in that branch you've commited something that is'nt in your main branch, you can use git reflog, pick the commit hash and use the follow steps

        git cherry-pick hashName
        
        Its gonna push commit to your current branch, even if it's branch is deleted

Stash

    git stash
        Save your current local changes (not commited) inside your SO

    git stash list
        List all stashed changes in your local machine
    
    git stash apply stashNum
        apply stash commits inside your repo. Locate your stasNum next to e.g. 'stash@{0321}', 'stash@{21}'

    git stash drop
        remove a stash commit form stash list

Tag

    git tag -a versionName -m "this is a message"
        Defines a checkpoint in your repo. Commom user e.g. when you deploy your application and need a consistant version without bugs (or minimal as possible). Message is optional
        e.g. git tag -a v.1.4
    
    git tag
        Tag list available

Branches

    git branch -d branchName
        Removes a branch

    git branch -D branchName
        Force deletion even if a branch is ahead of your current workflow

    git switch branchName || git checkout branchName
        Switch your current working tree

    git branch branchName
        Creates a new branch

    git switch -c branchName
        Creates and switch to a new branch

Other

    git bisect
        Starts search about commits who change determined line

# GUI Tools

See <a href='https://git-scm.com/download/gui/windows'>documentation examples</a>

GUI

    Git Cola
    GitHub Desktop
    Git Kraken

Extensions

    GitLens > VS Code
    Octotree > Chromiun browsers

# Hooks and Deploy

Open your .git dir

    cd .git
    cd hooks

What is hooks?

See docs <a href='https://githooks.com/'>here</a>

    Hooks are pre-defined scripts you can code before or after you do something inside your repo

    > Example
    pre-commit

    #!/bin/sh
    echo "This is a console script you could do before commit something :D"
    
    > Example
    pre-receive
    Event handler after receiving a push script

    #!/bin/sh
    git --git-dir="C:\www\mgr-cursos\git-e-github\" --work-tree="C:\www\mgr-cursos\web" checkout -f

# Hosting

You can store you code in a remote repo in:

    GitHub
    Gitlab
    Bitbucket
    Azure

# Concurrency

    SVN
    Mercuria
    BitKeeper
