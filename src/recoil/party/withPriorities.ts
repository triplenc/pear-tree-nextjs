import {selector} from 'recoil'
import partyWithFilters from './withFilters'
import {partyPriorityStateAtom} from './atom'

const partyWithPriorities = selector({
  key: 'partyWithPriorities',
  get: ({get}) => {
    const partyList = [...get(partyWithFilters)]
    const priorityState = get(partyPriorityStateAtom)

    switch (priorityState) {
      case 'ASC':
        return partyList.sort((a, b) => a.priority - b.priority)
      case 'DESC':
        return partyList.sort((a, b) => b.priority - a.priority)
      default:
        return partyList
    }
  },
})

export default partyWithPriorities
