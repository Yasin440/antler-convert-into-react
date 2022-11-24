export const support_sub_list = [
    {
        img: './img/svg/bookmark.svg',
        url: 'knowledgebase-list',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        name: "Lista Knowlege",
        batch: null,
        batch_color: null
    },
    {
        img: './img/svg/book.svg',
        url: 'knowledgebase-list',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        name: "Lista Knowlege",
        batch: null,
        batch_color: null
    },
    {
        img: './img/svg/emailopen.svg',
        url: 'knowledgebase-list',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        name: "Lista Knowlege",
        batch: null,
        batch_color: null
    },
    {
        img: './img/svg/compare.svg',
        url: 'knowledgebase-list',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        name: "Lista Knowlege",
        batch: "NEW",
        batch_color: 'bg-grey'
    },
    {
        img: './img/svg/blog.svg',
        url: 'knowledgebase-list',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        name: "Lista Knowlege",
        batch: "HOT",
        batch_color: 'bg-pink'
    },
    {
        img: './img/svg/question.svg',
        url: 'knowledgebase-list',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        name: "Lista Knowlege",
        batch: null,
        batch_color: null
    },
]
export const navItems = [
    {
        subNavDesignID: 1,
        name: 'Case',
        link: '',
        badge: 'NEW',
        badge_color: 'bg-pink',
        subNav: [
            { name: 'Home', link: '/home', badge: null, badge_color: null },
            { name: 'About Us', link: '/about-us', badge: null, badge_color: null },
            { name: 'Contact', link: '/contact-us', badge: null, badge_color: null },
            { name: 'Close', link: '/home', badge: 'NEW', badge_color: 'bg-pink' }
        ]
    },
    {
        subNavDesignID: 2,
        name: 'Alojamento',
        link: '',
        badge: 'PRO',
        badge_color: 'bg-pink',
        subNav: [
            {
                name: 'Alojamento Partilhado',
                subName: 'Lorem ipsum dolor sit amet, consectetur',
                img: './img/svg/cloudfiber.svg',
                link: '',
                badge: null,
                badge_color: null
            },
            {
                name: 'Revenda Cloud',
                subName: 'Lorem ipsum dolor sit amet, consectetur',
                img: './img/svg/reseller.svg',
                link: '',
                badge: null,
                badge_color: null
            },
            {
                name: 'Servidores Dedicados',
                subName: 'Lorem ipsum dolor sit amet, consectetur',
                img: './img/svg/dedicated.svg',
                link: '',
                badge: 'FILTER',
                badge_color: 'bg-purple'
            },
            {
                name: 'Cloud VPS',
                subName: 'Lorem ipsum dolor sit amet, consectetur',
                img: './img/svg/vps.svg',
                link: '',
                badge: 'SSD',
                badge_color: 'bg-grey'
            },
            {
                name: 'Alojamento WordPress',
                subName: 'Lorem ipsum dolor sit amet, consectetur',
                img: './img/svg/wordpress.svg',
                link: '',
                badge: null,
                badge_color: null
            },
            {
                name: 'Domínios',
                subName: 'Lorem ipsum dolor sit amet, consectetur',
                img: './img/svg/domains.svg',
                link: '',
                badge: null,
                badge_color: null
            },
            {
                name: 'Alojamento Developers',
                subName: 'Lorem ipsum dolor sit amet, consectetur',
                img: './img/svg/code.svg',
                link: '',
                badge: null,
                badge_color: null
            }
        ]
    },
    {
        subNavDesignID: 3,
        name: 'Paginas',
        link: '',
        badge: null,
        badge_color: null,
        subNav: [
            {
                name: 'Serviços',
                img: './img/svg/favorite.svg',
                lists: [
                    { name: 'Email Seguro', link: '/', badge: null, badge_color: null },
                    { name: 'Certificados SSL', link: '/', badge: null, badge_color: null },
                    { name: 'E-mail Corporativo', link: '/', badge: null, badge_color: null },
                    { name: 'Magento Pro', link: '/', badge: null, badge_color: null },
                    { name: 'G Suite - Google', link: '/', badge: null, badge_color: null },
                    { name: 'Serviços IPTV', link: '/', badge: null, badge_color: null },
                    { name: 'Servidor de Jogos NEW', link: '/', badge: 'NEW', badge_color: 'bg-pink' },
                    { name: 'HoRadio Streamme', link: '/', badge: 'NEW', badge_color: 'bg-pink' },
                ]
            },
            {
                name: 'Infraestrutura',
                img: './img/svg/infrastructure.svg',
                lists: [
                    { name: 'Proteção DDoS', link: '/', badge: null, badge_color: null },
                    { name: 'Datacenter TOP', link: '/', badge: 'TOP', badge_color: 'bg-grey' },
                    { name: 'Sobre nós', link: '/', badge: null, badge_color: null },
                    { name: 'Database-as-a-service', link: '/', badge: null, badge_color: null },
                    { name: 'Elementos', link: '/', badge: null, badge_color: null },
                    { name: 'Números Virtuais', link: '/', badge: null, badge_color: null },
                    { name: 'Servidor de Voz NEW', link: '/', badge: 'NEW', badge_color: 'bg-pink' },
                    { name: 'Serviços SEO Geridos', link: '/', badge: 'NEW', badge_color: 'bg-pink' },
                ]
            },
            {
                name: 'Global',
                img: './img/svg/global.svg',
                lists: [
                    { name: 'Proteção DDoS', link: '/', badge: 'NEW', badge_color: 'bg-pink' },
                    { name: 'Datacenter TOP', link: '/', badge: 'TOP', badge_color: 'bg-grey' },
                    { name: 'Sobre nós', link: '/', badge: null, badge_color: null },
                    { name: 'Database-as-a-service', link: '/', badge: null, badge_color: null },
                    { name: 'Elementos', link: '/', badge: null, badge_color: null },
                    { name: 'Números Virtuais', link: '/', badge: null, badge_color: null },
                    { name: 'Servidor de Voz NEW', link: '/', icon: 'fas fa-tags c-pink ms-2' },
                    { name: 'Serviços SEO Geridos', link: '/', badge: 'HOT', badge_color: 'bg-pink' },
                ]
            },
        ],
        offer: {
            title: 'Cloud VPS SSDGet 50% Discount',
            details: 'Enjoy increased flexibility and get the performance you need with SSD Storage.',
            currency: '$',
            timeUnit: '/M',
            beforePrice: '20.00',
            nowPrice: '12.00',
            link: '/'
        }
    },
    {
        subNavDesignID: 1,
        name: 'Recursos',
        link: '',
        badge: null,
        badge_color: null,
        subNav: [
            { name: 'WHMCS Template', link: '/', badge: 'HOT', badge_color: 'bg-pink' },
            { name: 'About Us', link: '/', badge: null, badge_color: null },
            { name: 'Contact', link: '/', badge: null, badge_color: null },
            { name: 'Close', link: '/', badge: 'NEW', badge_color: 'bg-pink' },
            { name: 'About Us', link: '/', badge: null, badge_color: null },
            { name: 'Contact', link: '/', badge: null, badge_color: null },
            { name: 'Close', link: '/', badge: 'NEW', badge_color: 'bg-pink' }
        ]
    },
    {
        subNavDesignID: 4,
        name: 'Support',
        link: '',
        badge: null,
        badge_color: null,
        subNav: [
            {
                img: './img/svg/bookmark.svg',
                url: 'knowledgebase-list',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                name: "Lista Knowlege",
                batch: null,
                batch_color: null
            },
            {
                img: './img/svg/book.svg',
                url: 'knowledgebase-list',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                name: "Lista Knowlege",
                batch: null,
                batch_color: null
            },
            {
                img: './img/svg/emailopen.svg',
                url: 'knowledgebase-list',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                name: "Lista Knowlege",
                batch: null,
                batch_color: null
            },
            {
                img: './img/svg/compare.svg',
                url: 'knowledgebase-list',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                name: "Lista Knowlege",
                batch: "NEW",
                batch_color: 'bg-grey'
            },
            {
                img: './img/svg/blog.svg',
                url: 'knowledgebase-list',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                name: "Lista Knowlege",
                batch: "HOT",
                batch_color: 'bg-pink'
            },
            {
                img: './img/svg/question.svg',
                url: 'knowledgebase-list',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                name: "Lista Knowlege",
                batch: null,
                batch_color: null
            }
        ],
        contact: {
            title: 'Support Premium',
            phone: '+ (123) 1300-656-1046',
            address: 'HeadQuarters - No.01 - 399-0 Lorem Street City Melbourne',
            link: '/contact-us'
        }
    }
]