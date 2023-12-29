import { prisma } from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { string, z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(5),
});

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = await schema.safeParse(body);

	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);

	const user = await prisma.user.findUnique({ where: { email: body.email } });

	if (user)
		return NextResponse.json({ error: "User already Exists" }, { status: 404 });

	const hashedPassword = await bcrypt.hash(body.password, 10);
	const NewUser = await prisma.user.create({
		data: { email: body.email, hashedPassword },
	});
	return NextResponse.json({ email: NewUser.email }, { status: 201 });
}
