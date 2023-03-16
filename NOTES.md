Qwik Notes
===

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
