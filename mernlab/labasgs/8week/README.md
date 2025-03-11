# 8th Week Lab Agenda

1. Create a new database as college database.
2. Create students and faculty collections under college database
3. Insert documents in students and faculty collections.
4. Show the collections data
5. Create ur own indexes for the documents
6. Count documents in a collections
7. Find first document in a collection
8. Find document by id
9. Find student and faculty by surname
10. Display top 10 documents in the collection
11. Students names of the students who go less than 40 marks different
subjects
12. Display names of the students based on their marks
13. Update name of the student
14. Delete the documents in student collection, whose marks less than 35
15. Display the grades of the students
16. Drop the collection of faculty
17. Drop the database
18. Execute query selectors (comparison, selectors, logical selectors) and list
out the results on any collection.

```java
// 1. Create a new database as "college"
use college;

// 2. Create students and faculty collections
db.createCollection("students");
db.createCollection("faculty");

// 3. Insert documents in students and faculty collections
db.students.insertMany([
  { name: "Pavan", branch: "CSE", marks: { cn: 45, dbms: 38, os: 50 } },
  { name: "Siddu", branch: "CSD", marks: { cn: 30, dbms: 25, os: 40 } },
  { name: "Mithil", branch: "CSM", marks: { cn: 80, dbms: 75, os: 85 } }
]);

db.faculty.insertMany([
  { name: "Vignesh", subject: "CN", branch: "CSE" },
  { name: "Eswar", subject: "DBMS", branch: "CSD" },
  { name: "Fakruddin", subject: "OS", branch: "CSM" }
]);

// 4. Show collections data
db.students.find().pretty();
db.faculty.find().pretty();

// 5. Create indexes for documents
db.students.createIndex({ name: 1 });
db.faculty.createIndex({ subject: 1 });

// 6. Count documents in a collection
db.students.countDocuments();
db.faculty.countDocuments();

// 7. Find first document in a collection
db.students.findOne();
db.faculty.findOne();

// 8. Find document by _id (Replace with actual ObjectId)
db.students.findOne({ _id: ObjectId("your_id_here") });

// 9. Find student and faculty by surname (Not applicable as names are single-word)
// Instead, find by first letter of name
db.students.find({ name: /^P/ }).pretty();
db.faculty.find({ name: /^V/ }).pretty();

// 10. Display top 10 documents in the collection
db.students.find().limit(10).pretty();
db.faculty.find().limit(10).pretty();

// 11. Students names who got less than 40 marks in different subjects
db.students.find({ $or: [{ "marks.cn": { $lt: 40 } }, { "marks.dbms": { $lt: 40 } }, { "marks.os": { $lt: 40 } }] }, { name: 1, _id: 0 });

// 12. Display names of students based on their marks (Sorted in descending order of total marks)
db.students.aggregate([
  { $addFields: { totalMarks: { $sum: ["$marks.cn", "$marks.dbms", "$marks.os"] } } },
  { $sort: { totalMarks: -1 } },
  { $project: { name: 1, totalMarks: 1, _id: 0 } }
]);

// 13. Update the name of a student
db.students.updateOne({ name: "Siddu" }, { $set: { name: "Siddhartha" } });

// 14. Delete students whose marks are less than 35 in any subject
db.students.deleteMany({ $or: [{ "marks.cn": { $lt: 35 } }, { "marks.dbms": { $lt: 35 } }, { "marks.os": { $lt: 35 } }] });

// 15. Display the grades of students (Assuming grading logic)
db.students.aggregate([
  { 
    $addFields: { 
      totalMarks: { $sum: ["$marks.cn", "$marks.dbms", "$marks.os"] },
      grade: {
        $switch: {
          branches: [
            { case: { $gte: [{ $sum: ["$marks.cn", "$marks.dbms", "$marks.os"] }, 240] }, then: "A+" },
            { case: { $gte: [{ $sum: ["$marks.cn", "$marks.dbms", "$marks.os"] }, 200] }, then: "A" },
            { case: { $gte: [{ $sum: ["$marks.cn", "$marks.dbms", "$marks.os"] }, 150] }, then: "B" },
            { case: { $gte: [{ $sum: ["$marks.cn", "$marks.dbms", "$marks.os"] }, 100] }, then: "C" },
            { case: { $lt: [{ $sum: ["$marks.cn", "$marks.dbms", "$marks.os"] }, 100] }, then: "F" }
          ],
          default: "F"
        }
      }
    }
  },
  { $project: { name: 1, totalMarks: 1, grade: 1, _id: 0 } }
]);

// 16. Drop the faculty collection
db.faculty.drop();

// 17. Drop the college database
db.dropDatabase();

// 18. Execute query selectors
// Comparison selectors
db.students.find({ "marks.cn": { $gte: 50 } }).pretty();  // Students who scored 50 or more in CN

// Logical selectors
db.students.find({ $and: [{ "marks.cn": { $gte: 40 } }, { "marks.dbms": { $gte: 40 } }] }).pretty(); // Students who scored at least 40 in CN and DBMS

// Element selectors (Check if 'marks.os' exists)
db.students.find({ "marks.os": { $exists: true } }).pretty();
```
