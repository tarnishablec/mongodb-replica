rsconf = {
    _id: "rs0",
    members: [
        {_id: 0, host: "144.202.33.124:27017"},
        {_id: 1, host: "144.202.33.124:27018"},
        {_id: 2, host: "144.202.33.124:27019"},
    ]
};

rs.initiate(rsconf);
rs.conf();

