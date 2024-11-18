import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faExchange } from '@fortawesome/free-solid-svg-icons';

library.add(faRocket, faHandshake, faBriefcase, faFile, faCopy, faExchange);

export default (app: any) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
};