export const processPayment = async (amount, cardDetails) => {
  try {
    // Simulate payment processing
    console.log('Processing payment:', amount, cardDetails);
    return { success: true, transactionId: '123456' };
  } catch (error) {
    console.error('Payment failed:', error.message);
    return { success: false, error: error.message };
  }
};
