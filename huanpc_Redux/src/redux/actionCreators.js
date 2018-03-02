export function toggleIsAdding() {
    return { type: 'TOGGLE_IS_ADDING', };
}

export function toggleMemorized(id) {
    return { type: 'TOGGLE_MEMORIZED', id};
}

export function toggleShow(id) {
    return { type: 'TOGGLE_SHOW', id: id};
}

// export function addWord(en, vn) {
//     return { type: 'ADD_WORD', en: en, vn: vn};
// }

export function addWord(en, vn) {
    return { type: 'ADD_WORD', en, vn };
}

export function showAll() {
    return { type: 'FILTER_SHOW_ALL' };
}

export function showAMemorized() {
    return { type: 'FILTER_MEMORIZED' };
}

export function showNeedPractice() {
    return { type: 'FILTER_NEED_PRACTICE' };
}

export function filterStatus(actionType) {
    return { type: actionType };
}

