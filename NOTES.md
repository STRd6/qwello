# Qwik Notes

Some events can't be handled async:

dragstart
submit

It's too late by the time they trigger.

It would be nice for Qwik to eagerly load these automatically.

To manually work around:

use `preventdefault:submit` on form elements
manually attach event listeners with `useVisibleTask$`

---

After the lists signal is set the first time then adding items to each list works fine even if the lists are re-ordered.

If the lists are re-ordered before setting the signal when the signal is set the first time it resets their positions.

## UI

Basic problems that should be solved by any UI framework:

- Virtualized Lists display only the visible elements of potentially tens of thousands
- Collection mapping and splices only update the elements inserted or removed.
- Updates from a component shouldn't rerender the component that triggered the change (input changed, drag dropped)

- Filetree (expand / collapse) built on top of virtualized lists.
- Trello lists of lists
- Spreadsheet
- Table
