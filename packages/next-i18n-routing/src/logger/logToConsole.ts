import { NEXT_I18N_ROUTING_PLUGIN_NAME } from '../consts';

const logToConsole = (message: string) => {
  // eslint-disable-next-line no-console
  console.log(`> ${NEXT_I18N_ROUTING_PLUGIN_NAME} - ${message}`);
};

export { logToConsole };
