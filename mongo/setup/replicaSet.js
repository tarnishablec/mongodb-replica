rsconf = {
    _id: "rs0",
    members: [
        {_id: 0, host: "rs0-mongo0:27017"},
        {_id: 1, host: "rs0-mongo1:27017"},
        {_id: 2, host: "rs0-mongo2:27017"},
    ]
};

rs.initiate(rsconf);
rs.conf();