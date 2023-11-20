import {
  FETCH_TRANSACTIONS,
  FETCH_TRANSACTIONS_SUCCESSFUL,
  FETCH_TRANSACTIONS_ERROR,

  FETCH_TRANSACTION_ADDRESS,
  FETCH_TRANSACTION_ADDRESS_SUCCESSFUL,
  FETCH_TRANSACTION_ADDRESS_ERROR,

  FETCH_TRANSACTION,
  FETCH_TRANSACTION_SUCCESSFUL,
  FETCH_TRANSACTION_ERROR,

  FETCH_ORPHAN_TRANSACTION,
  FETCH_ORPHAN_TRANSACTION_SUCCESSFUL,
  FETCH_ORPHAN_TRANSACTION_ERROR,

  FETCH_ORPHAN_LOG,
  FETCH_ORPHAN_LOG_SUCCESSFUL,
  FETCH_ORPHAN_LOG_ERROR
} from "./actionTypes";

export const fetchTransactions = (payload) => {
  return {
    type: FETCH_TRANSACTIONS,
    payload: { payload },
  };
};

export const fetchTransactionsSuccessful = (payload) => {
  return {
    type: FETCH_TRANSACTIONS_SUCCESSFUL,
    payload: payload,
  };
};

export const fetchTransactionsError = (error) => {
  return {
    type: FETCH_TRANSACTIONS_ERROR,
    payload: error,
  };
};


export const fetchTransaction = (id) => {
  return {
    type: FETCH_TRANSACTION,
    payload: id,
  };
};

export const fetchTransactionSuccessful = (payload) => {
  return {
    type: FETCH_TRANSACTION_SUCCESSFUL,
    payload: payload,
  };
};

export const fetchTransactionError = (error) => {
  return {
    type: FETCH_TRANSACTION_ERROR,
    payload: error,
  };
};



export const fetchTransactionAddress = (address) => {
  return {
    type: FETCH_TRANSACTION_ADDRESS,
    payload: address,
  };
};

export const fetchTransactionAddressSuccessful = (payload) => {
  return {
    type: FETCH_TRANSACTION_ADDRESS_SUCCESSFUL,
    payload: payload,
  };
};

export const fetchTransactionAddressError = (error) => {
  return {
    type: FETCH_TRANSACTION_ADDRESS_ERROR,
    payload: error,
  };
};


export const fetchOrphan = (payload) => {
  return {
    type: FETCH_ORPHAN_TRANSACTION,
    payload: { payload },
  };
};

export const fetchOrphanSuccessful = (payload) => {
  return {
    type: FETCH_ORPHAN_TRANSACTION_SUCCESSFUL,
    payload: payload,
  };
};

export const fetchOrphanError = (error) => {
  return {
    type: FETCH_ORPHAN_TRANSACTION_ERROR,
    payload: error,
  };
};


export const fetchOrphanLog = (payload) => {
  return {
    type: FETCH_ORPHAN_LOG,
    payload: { payload },
  };
};

export const fetchOrphanLogSuccessful = (payload) => {
  return {
    type: FETCH_ORPHAN_LOG_SUCCESSFUL,
    payload: payload,
  };
};

export const fetchOrphanLogError = (error) => {
  return {
    type: FETCH_ORPHAN_LOG_ERROR,
    payload: error,
  };
};