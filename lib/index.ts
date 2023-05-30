import type { Env } from "@terra-money/terrain";
import { CaptchaDappTerraClient } from './clients/CaptchaDappTerraClient';

export class Lib extends CaptchaDappTerraClient {
  env: Env;

  constructor(env: Env) {
    super(env.client, env.defaultWallet, env.refs['captcha-dapp-terra'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
