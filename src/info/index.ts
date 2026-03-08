// Re-exports from the centralised constants file.
// All data now lives in src/constants/index.js � edit it there.

import {
    profile,
    navigationLinks,
    slugs,
    experiences,
    projects,
    skillSet,
} from '../constants';

const about = profile.about;

export { experiences, projects, navigationLinks, slugs, skillSet, about };
