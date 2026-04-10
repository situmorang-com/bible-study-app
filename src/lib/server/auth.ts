import bcrypt from 'bcryptjs';
import type { Cookies } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { users, type User } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const normalizeName = (value: unknown) =>
	typeof value === 'string' ? value.trim() : '';

export const normalizePin = (value: unknown) =>
	typeof value === 'string' ? value.trim() : '';

export const findUserByName = (name: string) =>
	db.select().from(users).where(eq(users.name, name)).get();

export const isValidPinFormat = (pin: string) => /^\d{4}$/.test(pin);

export const verifyPin = (pin: string, hashedPin: string) =>
	bcrypt.compareSync(pin, hashedPin);

export const setAuthCookies = (
	cookies: Cookies,
	user: Pick<User, 'id' | 'name' | 'avatarEmoji'>,
	secure: boolean
) => {
	cookies.set('userId', user.id, {
		path: '/',
		maxAge: COOKIE_MAX_AGE,
		httpOnly: true,
		sameSite: 'lax',
		secure
	});
	cookies.set('userName', user.name, {
		path: '/',
		maxAge: COOKIE_MAX_AGE,
		httpOnly: false,
		sameSite: 'lax',
		secure
	});
	cookies.set('userAvatar', user.avatarEmoji, {
		path: '/',
		maxAge: COOKIE_MAX_AGE,
		httpOnly: false,
		sameSite: 'lax',
		secure
	});
};
