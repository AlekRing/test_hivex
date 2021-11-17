import Sendsay from "../../react-app-env.d";
const sendsay = new Sendsay();
sendsay.setSessionFromCookie('sendsay_session');

export default class SendsayCustom {
  static sendsay = sendsay;
}
