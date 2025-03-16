- Every story encounter is located in its own folder and consists of a series of *.j2 files.
- The entry point is an `index.j2`.
- State can be referenced as `hero.<attribute>` (e.g. `hero.hp`or `hero.wisdom`) or globally as `g.<attribute>`.
- State can be set 
- If we go with a UI, it can list all j2 files as snippets (and allow to add new ones). In addition...
    - There is a preview window that renders the current state starting from `index.j2`.
    - There is a window that allows you to set state (both globally and for character) ad hoc for testing.

