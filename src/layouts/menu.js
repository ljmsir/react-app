export const MenuData = [
    {menuName: '首页', menuUrl: '/home', id: '0'},
    {
        menuName: '商品管理', menuUrl: '',
        children: [
            {
                menuName: '价格查询',
                menuUrl: '/priceSearch',
                id: '1'
            },
            {
                menuName: '价格计算器',
                menuUrl: '/priceCalculate',
                id: '2'
            },
            {
                menuName: '报价库',
                menuUrl: '/priceOfferLibrary',
                id: '3'
            },
            {
                menuName: '参数设置',
                menuUrl: '/paramSet',
                id: '4'
            }
        ]
    }
]