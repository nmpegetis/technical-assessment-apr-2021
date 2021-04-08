package observer.stockmarketindices.observers;

import observer.stockmarketindices.observable.Market;

/**
 * @author Nikolas Begetis
 */

public class MobileApp implements Observer {

	public void update(Market index) {
		System.out.println("MobileApp - The value of "+index.getIndexName()+" has changed:"+index.getIndexValue());
	}

}