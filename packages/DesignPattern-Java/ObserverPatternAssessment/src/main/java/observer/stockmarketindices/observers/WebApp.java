package observer.stockmarketindices.observers;

import observer.stockmarketindices.observable.Market;

/**
 * @author Nikolas Begetis
 */
public class WebApp implements Observer {

	public void update(Market index) {
		System.out.println("WebApp - The value of "+index.getIndexName()+" has changed:"+index.getIndexValue());
	}

}
