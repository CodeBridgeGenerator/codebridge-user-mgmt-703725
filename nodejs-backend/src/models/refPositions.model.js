
    module.exports = function (app) {
        const modelName = 'ref_positions';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   name: { type: String },
       role: { type: Schema.Types.ObjectId, ref: "roles", required: true },
       abbr: { type: String },
       reportingToid: { type: Schema.Types.ObjectId, ref: "roles" },
       direct: { type: Boolean, default: true },
       isHead: { type: Boolean, default: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };