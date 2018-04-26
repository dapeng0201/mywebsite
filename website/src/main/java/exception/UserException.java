package exception;

public class UserException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 9017363461676153545L;

	public UserException(String message) {
		super(message);
	}
	
	public UserException(String message, Throwable cause) {
		super(message, cause);
	}
	
}
