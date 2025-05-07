import {
  diff_match_patch,
  DIFF_INSERT,
  DIFF_DELETE,
  DIFF_EQUAL,
} from 'diff-match-patch';

export const getHighlightedDiffHTML = (original, updated) => {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(original, updated);
  dmp.diff_cleanupSemantic(diffs);

  return diffs
    .map(([op, data]) => {
      switch (op) {
        case DIFF_INSERT:
          return `<span style="color: red;">${data}</span>`;
        case DIFF_DELETE:
          return `<del style="color: gray;">${data}</del>`;
        case DIFF_EQUAL:
          return data;
        default:
          return data;
      }
    })
    .join('');
};
