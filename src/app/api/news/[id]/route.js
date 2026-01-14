import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    
    if (!body.image) {
      return NextResponse.json(
        { success: false, error: "Image path is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("ph_newspaper");

    const result = await db.collection("news").updateOne(
      { _id: new ObjectId(id) },
      { $set: { image: body.image } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "News article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: "Image updated successfully" 
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
