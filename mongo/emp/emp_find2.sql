use test

db.emp.count()

db.emp.find({sal:{'$gte':2500}}, {_id:0})
db.emp.find({sal:{'$gte':2500}}).count()
