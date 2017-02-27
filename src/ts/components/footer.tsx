import * as React from 'react';
import FilterLink from '../containers/filterLink'
import VisibilityFilter from '../state/visibilityFilter'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer;