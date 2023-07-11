'use client'

import { useEffect, useState } from 'react'
import { getOrderFx } from '../api/order'
import Header from '../components/Header'
import useRedirectByUserCheck from '../hooks/useRedirectByUserCheck'
import { ExportDetails } from '../components/OrderDetails'

const EmptyText = () => {
  return <div className='text-center items-center justify-center'>Введите номер заказа для получения дополнительной информации</div>
}

const OrderTracking = () => {
  const { shouldLoadContent, loading } = useRedirectByUserCheck(true)
  const [orderId, setOrderId] = useState('')
  const [item, setItem] = useState('')
  const [showNotFound, setShowNotFound] = useState(false)

  if (loading) {
    return <div />
  }

  const checkOrder = async () => {
    if (!orderId.trim()) {
      return
    }
    setShowNotFound(false)

    let { order } = await getOrderFx({ url: `orders/find/${orderId.trim()}` })

    if (order) {
      console.log('item', order)
      setItem(order)
    } else {
      setShowNotFound(true)
    }
  }

  return (
    <>
      {shouldLoadContent && (
        <>
          <Header />
          <div className="container flex flex-col items-center justify-center">
            <div className="w-9/12 max-w-xl py-4 mt-20">
              <div className=" flex overflow-hidden w-full">
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border 
                  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full
                 p-2.5   dark:placeholder-gray-400 border-gray-300
                  dark:text-gray-700 dark:focus:ring-primary-500 dark:focus:border-primary-500
                  dark:shadow-sm-light focus:ring-0"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
                <button
                  className="bg-gray-900 hover:bg-gray-700 focus:outline-none
                 text-white px-6 text-lg font-semibold rounded-r-md relative right-2"
                  onClick={checkOrder}
                >
                  Поиск
                </button>
              </div>
            </div>
            {showNotFound && <div>Заказ не найден</div>}
            {item && !showNotFound ? (
              <ExportDetails item={item} />
            ) : (
              <EmptyText />
            )}
          </div>
        </>
      )}
    </>
  )
}

export default OrderTracking
