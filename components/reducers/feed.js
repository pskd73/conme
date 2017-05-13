const feed = (state = {
    avatar: "/images/mascot.jpg",
    isMyFeedEnabled: true,
    isFriendsFeedEnabled: true,
    friends: [{
        name: "Sreedevi",
        avatar: "/images/mascot.jpg"
    }],
    feeds: [
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
        {
            author: "Pramod Kumar",
            avatar: "/images/mascot.jpg",
            time: new Date(),
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
        },
    ]
}, action) => {
    switch (action.type) {
        case "TOGGLE_FRIENDS_FEED":
            return Object.assign({}, state, {
                isFriendsFeedEnabled: !state.isFriendsFeedEnabled
            });
        case "TOGGLE_MY_FEED":
            return Object.assign({}, state, {
                isMyFeedEnabled: !state.isMyFeedEnabled
            });
        case "BROADCAST":
            const feeds = state.feeds.splice(0);
            feeds.unshift(action.message);
            return Object.assign({}, state, {
                feeds
            });
        default:
            return state;
    }
}

export default feed;
