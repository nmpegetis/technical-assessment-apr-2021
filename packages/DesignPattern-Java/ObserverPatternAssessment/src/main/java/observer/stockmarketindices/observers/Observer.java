package observer.stockmarketindices.observers;

import observer.stockmarketindices.observable.Market;

/**
 * @author Nikolas Begetis
 */

public interface Observer {
	public void update(Market index);
}
