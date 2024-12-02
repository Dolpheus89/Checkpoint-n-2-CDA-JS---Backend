import { Field, ID, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("countries")
export class Country {
	@PrimaryGeneratedColumn()
	@Field((type) => ID)
	id?: number;

	@Column({
		length: 3,
	})
	@Field()
	code: string;

	@Column({
		length: 168,
	})
	@Field()
	name: string;

	@Column({
		length: 10,
	})
	@Field()
	emoji: string;

	@Column({
		length: 11,
	})
	@Field()
	continent: string;

	constructor(code: string, name: string, emoji: string, continent: string) {
		this.code = code;
		this.name = name;
		this.emoji = emoji;
		this.continent = continent;
	}
}
