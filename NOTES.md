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
