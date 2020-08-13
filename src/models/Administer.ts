import database from "../config/database";

interface IAdministerSchema extends database.Document {
  fullName: string;
  email: string;
  password: string;
}

const AdministerSchema = new database.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export default database.model<IAdministerSchema>(
  "Administer",
  AdministerSchema
);