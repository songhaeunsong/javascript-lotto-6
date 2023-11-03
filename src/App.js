import { MESSAGE } from "./Constants.js";
import Utility from "./utils/utility.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    const util = new Utility();
    const purchaseQuantity = await util.getPurchaseQuantity();
    const myLottoArr = await util.getLottoNumbers(purchaseQuantity, 1, 45, 6);
    myLottoArr.map((lotto) => {
      const lottoStr = lotto.join(", ");
      Console.print("[" + lottoStr + "]");
    });
    const winningLottoArr = await util.getWinningLotto();
    const sameNumbers = util.compareNumbers(myLottoArr, winningLottoArr);
    const places = util.statisticsOfWinningLotto(sameNumbers);
    const rateOfReturn = util.rateOfReturn(places, purchaseQuantity);
    Console.print("총 수익률은 " + rateOfReturn + "%입니다.");
  }
}

export default App;
