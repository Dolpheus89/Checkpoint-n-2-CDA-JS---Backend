import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import { AppDataSource } from "../utils/data-source";
import { CountryInput } from "../entities/InputType/CountryInput";
import { Equal } from "typeorm";

@Resolver(Country)
export class CountryResolver {
	private countriesRepository = AppDataSource.getRepository(Country);

	@Query(() => [Country])
	async getAllCountries(): Promise<Country[]> {
		return (await this.countriesRepository.find()) || [];
	}

	@Query(() => Country)
	async getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
		return (
			(await this.countriesRepository.findOneBy({
				code: Equal(code),
			})) || null
		);
	}

	@Query(() => [Country])
	async getAllCountriesByContinent(
		@Arg("continent") continent: string,
	): Promise<Country[]> {
		return (
			(await this.countriesRepository.findBy({
				continent: Equal(continent),
			})) || []
		);
	}

	@Mutation(() => Country)
	async AddCountry(
		@Arg("datas", () => CountryInput) datas: CountryInput,
	): Promise<Country> {
		try {
			const country = new Country(
				datas.code,
				datas.name,
				datas.emoji,
				datas.continent,
			);

			await this.countriesRepository.save(country);

			return country;
		} catch (e) {
			console.error("create ad failed", e);
			throw new Error(`cannot create ad - ${e}`);
		}
	}
}
