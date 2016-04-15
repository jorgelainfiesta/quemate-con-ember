export default function() {

  this.namespace = 'api';
  this.timing = 400;

  this.get('/coffees', function(db) {
    return {
      data: db.coffees.map(attrs => (
        {
          type: 'coffee',
          id: attrs.id,
          attributes: attrs
        }
      ))
    };
  });

}
